import { DocumentNode } from 'graphql';
export declare class GraphQLAstExplorer {
  private readonly root;
  explore(
    documentNode: DocumentNode,
    outputPath: string,
    mode: 'class' | 'interface',
  ): Promise<any>;
}
