
import { IExecuteFunctions, INodeExecutionData, INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

export class CustomVault implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Custom Vault - Malik',
        name: 'CustomVault',
        group: ['secrets'],
        version: 1,
        description: 'Get the custom vault description',
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
                options: [
                    {
                        name: 'Testing the resource',
                        value: 'someRandomValue'
                    },
                    {
                        name: 'Solid value',
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
