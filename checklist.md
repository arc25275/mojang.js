# Checklist

## No Auth Needed

- [x] API Status
- [x] Username to UUID
- [x] Usernames to UUIDs
- [ ] UUID to Name History
- [ ] UUID to Profile and Skin/Cape

- [ ] Blocked Servers
- [ ] Statistics

## Auth Needed

- [ ] Profile Information
- [ ] Profile Name Change Information
- [ ] Name Availability
- [ ] Change Name
- [ ] Change Skin
- [ ] Upload Skin
- [ ] Reset Skin
- [ ] Verify Security Location
- [ ] Get Security Questions
- [ ] Send Security Answers
- [x] Authenticate
- [ ] Refresh
- [x] Validate
- [ ] Signout
- [x] Invalidate

## Realms

### GET requests

- [ ] GET /mco/available
- [ ] GET /mco/client/compatible
- [ ] GET /worlds
- [ ] GET /worlds/$ID
- [ ] GET /worlds/v1/$ID/join/pc
- [ ] GET /worlds/$ID/backups
- [ ] GET /worlds/$ID/slot/$WORLD(1-4)/download
- [ ] GET /ops/$ID
- [ ] GET /subscriptions/$ID
- [ ] GET /mco/buy
- [ ] GET /invites/count/pending
- [ ] GET /invites/pending
- [ ] GET /worlds/templates/$TEMPLATE?page=$PAGE&pageSize=$PAGE_SIZE
- [ ] GET /trial
- [ ] GET /activities/liveplayerlist
- [ ] GET /subscriptions/$WORLD_ID

### POST requests

- [ ] POST /mco/tos/agreed
- [ ] POST /ops/$WORLD_ID/$UUID
- [ ] POST /invites/$WORLD_ID

### PUT requests

- [ ] PUT /worlds/minigames/$MINIGAME_ID/$WORLD_ID
- [ ] PUT invites/reject/$INVITATION_ID
- [ ] PUT /invites/accept/$INVITATION_ID
- [ ] PUT /worlds/$WORLD_ID/open
- [ ] PUT /worlds/$WORLD_ID/close

### DELETE requests

- [ ] DELETE /invites/$WORLD_ID/invite/$UUID
- [ ] DELETE /ops/$WORLD_ID/$UUID
