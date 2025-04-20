import type { INodeProperties } from 'n8n-workflow';


export const commentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['comment'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: "List comments for a post",
				routing: {
					request: {
						method: 'GET',
						url: '=/comments?post_id={{$parameter["post_id"]}}',
					},
				},
				action: 'List comments for a post',
			},
			{
				name: 'Create',
				value: 'create',
				description: "Create post comment",
				routing: {
					request: {
						method: 'POST',
						url: '=/posts/{{$parameter["post_id"]}}/comments',
					},
				},
				action: 'Create new post comment',
			},

		],
		default: 'create',
	},
];

export const commentFields: INodeProperties[] = [
	{
		displayName: 'Message',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'message',
				type: 'body',
			},
		},
		description: 'Comment message',
	},
	{
		displayName: 'Internal',
		name: 'internal',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'internal',
				type: 'body',
			},
		},
		description: 'Whether to save this comment is internal or not',
	},
	{
		displayName: 'Post ID',
		name: 'post_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ['create', 'list'],
			},
		},
		routing: {
			send: {
				property: 'post_id',
				type: 'body',
			},
		},
		description: 'Post ID to which the comment belongs',
	},


];
