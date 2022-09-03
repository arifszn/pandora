---
title: Testing
---

All the APIs of Pandora are tested using **[PHPUnit](https://phpunit.de/)**. The test files can be found in `tests/Feature` folder.

## Running the Test

```shell
php artisan test
```

Or with sail,

```shell
./vendor/bin/sail test
```

## Database for Testing

If you have installed Pandora with **[docker/sail](/docs/installation#with-docker-sail)**, there has been an additional database named `testing` created automatically for testing. If you want to select another database or change any environment, you can do so in the `phpunit.xml` file or create a .env file for testing.

**phpunit.xml**

```xml
<php>
    <env name="APP_ENV" value="testing"/>
    <env name="BCRYPT_ROUNDS" value="4"/>
    <env name="CACHE_DRIVER" value="array"/>
    <env name="DB_DATABASE" value="testing"/>
    <env name="MAIL_MAILER" value="array"/>
    <env name="QUEUE_CONNECTION" value="sync"/>
    <env name="SESSION_DRIVER" value="array"/>
    <env name="TELESCOPE_ENABLED" value="false"/>
</php>
```
