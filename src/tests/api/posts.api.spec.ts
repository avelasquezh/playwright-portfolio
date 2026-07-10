import { test, expect } from '@playwright/test';
import { apiData} from '../../fixtures/test-data.js';
import type { Post } from '../../api/models/Post.js'

test.describe('Posts API', () => {

    test('GET /posts should return 100 posts', async ({ request }) => {
        const response = await request.get('/posts');
        expect(response.status()).toBe(200);
        const body = await response.json() as Post[];
        expect(Array.isArray(body)).toBeTruthy();
        expect(body).toHaveLength(100);
    });

    test('GET /posts/n should return a valid post', async ({ request }) => {
        const response = await request.get('/posts/3');
        expect(response.status()).toBe(200);
        const body = await response.json() as Post;
        expect(body.id).toBe(3);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('userId');
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');
        expect(typeof body.id).toBe('number');
        expect(typeof body.userId).toBe('number');
        expect(typeof body.title).toBe('string');
        expect(typeof body.body).toBe('string');
    });

    test('POST /posts should create a new post', async ({ request }) => {
        const payload = {title: apiData.newPost.title,body: apiData.newPost.body,userId: apiData.newPost.userId,};
        const response = await request.post('/posts', {data: payload,});
        expect(response.status()).toBe(201);
        const body = await response.json() as Post;
        expect(body.title).toBe(payload.title);
        expect(body.body).toBe(payload.body);
        expect(body.userId).toBe(payload.userId);
        expect(body).toHaveProperty('id');
    });

    test('GET /posts/999 should return 404', async ({ request }) => {
        const response = await request.get('/posts/999');
        expect(response.status()).toBe(404);
    });
});