import { INodeType, INodeTypeDescription } from 'n8n-workflow';

import { groupOperations } from './GroupDescription';
import { profileOperations, profileFields } from './ProfileDescription';
import { postOperations, postFields } from './PostDescription';
import { ideaOperations, ideaFields } from './IdeaDescription';
import { noteOperations, noteFields } from './NoteDescription';
import { commentOperations, commentFields } from './CommentDescription';
import { reportOperations, reportFields } from './ReportDescription';
import { getProfiles, getWorkflows, getUsers, getGroups } from './GenericFunctions';

export class VistaSocial implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'VistaSocial',
		name: 'vistaSocial',
		icon: 'file:vistasocial.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Vsita Social',
		defaults: {
			name: 'Vista Social',
		},
		usableAsTool: true,
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'vistaSocialApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://vistasocial.com/api/integration',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				default: 'comment',
				noDataExpression: true,
				options: [
					{
						name: 'Comment',
						value: 'comment',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Idea',
						value: 'idea',
					},
					{
						name: 'Note',
						value: 'note'
					},
					{
						name: 'Post',
						value: 'post',
					},
					{
						name: 'Profile',
						value: 'profile',
					},
					{
						name: 'Report',
						value: 'report',
					},


				],
				required: true,
			},
			...groupOperations,
			...profileOperations,
			...profileFields,
			...postOperations,
			...postFields,
			...ideaOperations,
			...ideaFields,
			...noteOperations,
			...noteFields,
			...commentOperations,
			...commentFields,
			...reportOperations,
			...reportFields
		]
	};


	methods = {
		loadOptions: {
			getProfiles,
			getWorkflows,
			getUsers,
			getGroups
		},
	};


}
