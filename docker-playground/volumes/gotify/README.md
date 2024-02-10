Here's how I generated the contents of `gotify.db`:

```
$ curl --user admin:admin -X 'POST' \
  'http://127.0.0.1:9000/application' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "defaultPriority": 5,
  "description": "Test app 1",
  "name": "test-app-1"
}'
```

To simplify the launch of `docker-playground`, I chose to commit the contents of `gotify.db` directly.
