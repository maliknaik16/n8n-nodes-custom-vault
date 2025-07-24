
import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class CustomVault implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Custom Vault',
        name: 'customVault',
        group: ['secrets'],
        version: 1,
        description: 'Get the custom vault description',
        subtitle: 'Testing n8n custom nodes',
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        defaults: {
            name: 'CustomVault'
        },
        properties: [
            {
                displayName: 'Resource',
                type: 'options',
                name: 'resource',
                noDataExpression: true,
                options: [
                    {
                        name: 'Testing the Resource',
                        value: 'someRandomValue'
                    },
                    {
                        name: 'Solid Value',
                        value: 'someSolidValue'
                    }
                ],
                default: 'someRandomValue'
            }
        ]
    }

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();

        return [items];
    }
}
