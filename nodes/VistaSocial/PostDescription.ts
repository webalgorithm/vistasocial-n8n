import type { INodeProperties } from 'n8n-workflow';

export const postOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['post'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				description: "List posts",
				routing: {
					request: {
						method: 'GET',
						url: '=/posts?status={{$parameter["status"]}}',
					},
				},
				action: 'List posts by status',
			},
			{
				name: 'Create',
				value: 'create',
				description: "Create posts",
				routing: {
					request: {
						method: 'POST',
						url: '/posts',
					},
				},
				action: 'Schedule new posts',
			},

		],
		default: 'list',
	},
];

export const postFields: INodeProperties[] = [
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		default: 'published',
		required: true,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['list'],
			},
		},
		options: [
			{
				name: 'Draft',
				value: 'draft',
			},
			{
				name: 'Failed',
				value: 'failed',
			},
			{
				name: 'Published',
				value: 'published',
			},
			{
				name: 'Rejected',
				value: 'rejected',
			},
			{
				name: 'Review',
				value: 'review',
			},
			{
				name: 'Scheduled',
				value: 'scheduled',
			}
		],
		description: 'Post status',
	},

	{
		displayName: 'Caption',
		name: 'message',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'message',
				type: 'body',
			},
		},
		description: 'Post caption',
	},

	{
		displayName: 'Date',
		name: 'publish_at',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'publish_at',
				type: 'body',
			},
		},
		description: "Publish at date. Format: 'now', 'queue_next', 'queue_last' or YYYY-MM-DD HH:mm:ss. If not specified, the post will be published immediately.",
	},

	{
		displayName: 'Profile Name or ID',
		name: 'profile_id',
		type: 'fixedCollection',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'profile_id',
				type: 'body',
				value: '={{$parameter["profile_id"].profile.map(item => item.value)}}',
			},
		},
		options: [
			{
				name: 'profile',
				displayName: 'Profile',
				values: [
					{
						displayName: 'Profile ID',
						name: 'value',
						type: 'string',
						default: '',

					},
				],
			},
		],

	},

	{
		displayName: 'Media',
		name: 'media_url',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'url',
				displayName: 'URL',
				values: [
					{
						displayName: 'Media URL',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'media_url',
				type: 'body',
				value: '={{$parameter["media_url"].url.map(item => item.value)}}',
			},
		},
		description: 'Link to an image or video to be shared with this post. If not specified, the post will be created without media.',
	},


	{
		displayName: 'Comments',
		name: 'comments',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'comment',
				displayName: 'Comment',
				values: [
					{
						displayName: 'Comment',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'comments',
				type: 'body',
				value: '={{$parameter["comments"].comment.map(item => item.value)}}',
			},
		},
		description: 'Extra comments to be added to the post. If not specified, the post will be created without comments.',
	},
	{
		displayName: 'Like',
		name: 'like',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'like',
				type: 'body',
			},
		},
		description: 'Whether to create post like (Twitter, LinkedIn, YouTube, Bluesky)',
	},
	{
		displayName: 'Save as Draft',
		name: 'draft',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'draft',
				type: 'body',
			},
		},
		description: 'Whether to save this post as a draft',
	},
	{
		displayName: 'Shortening Defaults',
		name: 'shortening',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'shortening',
				type: 'body',
			},
		},
		description: 'Whether to apply shortening defaults to the post',
	},
	{
		displayName: 'Facebook Publish As',
		name: 'facebook_publish_as',
		type: 'options',
		default: 'REELS',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'facebook_publish_as',
				type: 'body',
			},
		},
		options: [
			{
				name: 'Reel',
				value: 'REELS',
			},
			{
				name: 'Story',
				value: 'STORY',
			},
			{
				name: 'Video',
				value: 'VIDEO',
			},
			{
				name: 'Image',
				value: 'IMAGE',
			},
		],
		description: 'Facebook publish as options',
	},
	{
		displayName: 'Instagram Publish As',
		name: 'instagram_publish_as',
		type: 'options',
		default: 'REELS',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'instagram_publish_as',
				type: 'body',
			},
		},
		options: [
			{
				name: 'Reel',
				value: 'REELS',
			},
			{
				name: 'Story',
				value: 'STORY',
			},
			{
				name: 'Feed',
				value: 'FEED',
			},
		],
		description: 'Instagram publish as options',
	},
	{
		displayName: 'Snapchat Publish As',
		name: 'snapchat_publish_as',
		type: 'options',
		default: 'STORY',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'snapchat_publish_as',
				type: 'body',
			},
		},
		options: [
			{
				name: 'Story',
				value: 'STORY',
			},
			{
				name: 'Saved Story',
				value: 'SAVED_STORY',
			},
			{
				name: 'Spotlight',
				value: 'SPOTLIGHT',
			},
		],
		description: 'Snapchat publish as options',
	},
	{
		displayName: 'Instagram Invite Collaborators',
		name: 'instagram_collaborators',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'user',
				displayName: 'User',
				values: [
					{
						displayName: 'User',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'instagram_collaborators',
				type: 'body',
				value: '={{$parameter["instagram_collaborators"].user.map(item => item.value)}}',
			},
		},
		description: 'Enter public Instagram username. Only public Instagram profiles can be invited as collaborators.',
	},



	{
		displayName: 'Labels',
		name: 'labels',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		default: {},
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		options: [
			{
				name: 'label',
				displayName: 'Label',
				values: [
					{
						displayName: 'Label',
						name: 'value',
						type: 'string',
						default: '',
					},
				],
			},
		],
		routing: {
			send: {
				property: 'labels',
				type: 'body',
				value: '={{$parameter["labels"].user.map(label => item.value)}}',
			},
		},
		description: 'Internal post labels. If not specified, the post will be created without labels.',
	},
	{
		displayName: 'Pinterest Board Name',
		name: 'pinterest_board_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'pinterest_board_name',
				type: 'body',
			},
		},
		description: 'Pinterest board name. Required if Pinterest is selected as a profile.',
	},

	{
		displayName: 'Pinterest Section Name',
		name: 'pinterest_section_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'pinterest_section_name',
				type: 'body',
			},
		},
		description: 'Pinterest board name. Only relevant if Pinterest is selected as a profile.',
	},
	{
		displayName: 'Subreddit',
		name: 'subreddit_name',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['post'],
				operation: ['create'],
			},
		},
		routing: {
			send: {
				property: 'subreddit_name',
				type: 'body',
			},
		},
		description: 'Subreddit name. Required if Reddit is selected as a profile.',
	},
];
