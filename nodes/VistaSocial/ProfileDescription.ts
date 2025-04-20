import type { INodeProperties } from 'n8n-workflow';


// Operations for the `Bin` resource:
export const profileOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['profile'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: "List profiles in a group",
				routing: {
					request: {
						method: 'GET',
						url: '=/profiles?group_id={{$parameter["group_id"]}}',
					},
				},
				action: 'List profiles in a group',
			},

		],
		default: 'list',
	},
];

export const profileFields: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'group_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['profile'],
				operation: ['list'],
			},
		},
		description: 'Group ID to filter profiles by',
	},
];
