import { Injectable } from '@nestjs/common';
import {
  DocumentNode,
  EnumTypeDefinitionNode,
  FieldDefinitionNode,
  InputObjectTypeDefinitionNode,
  InputValueDefinitionNode,
  InterfaceTypeDefinitionNode,
  NamedTypeNode,
  ObjectTypeDefinitionNode,
  OperationTypeDefinitionNode,
  ScalarTypeDefinitionNode,
  TypeNode,
  TypeSystemDefinitionNode,
  UnionTypeDefinitionNode,
} from 'graphql';
import { get, map, sortBy, upperFirst } from 'lodash';
import { DEFINITIONS_FILE_HEADER } from './graphql.constants';

@Injectable()
export class GraphQLAstExplorer {
  private readonly root = ['Query', 'Mutation', 'Subscription'];

  async explore(
    documentNode: DocumentNode,
    outputPath: string,
    mode: 'class' | 'interface',
  ): Promise<any> {
    return;
  }
}
