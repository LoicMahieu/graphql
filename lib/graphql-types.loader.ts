import { Injectable } from '@nestjs/common';
import { flatten } from 'lodash';
import { mergeTypes } from 'merge-graphql-schemas';

@Injectable()
export class GraphQLTypesLoader {
  async mergeTypesByPaths(paths: string | string[]): Promise<string> {
    if (!paths || paths.length === 0) {
      return null;
    }

    const types = await this.getTypesFromPaths(paths);
    const flatTypes = flatten(types);
    return mergeTypes(flatTypes, { all: true }) as any;
  }

  private async getTypesFromPaths(paths: string | string[]): Promise<string[]> {
    return [];
  }
}
