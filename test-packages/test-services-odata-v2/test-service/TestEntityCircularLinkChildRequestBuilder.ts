/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { TestEntityCircularLinkChild } from './TestEntityCircularLinkChild';

/**
 * Request builder class for operations supported on the [[TestEntityCircularLinkChild]] entity.
 */
export class TestEntityCircularLinkChildRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TestEntityCircularLinkChild<T>, T> {
  /**
   * Returns a request builder for retrieving one `TestEntityCircularLinkChild` entity based on its keys.
   * @param keyProperty Key property. See [[TestEntityCircularLinkChild.keyProperty]].
   * @returns A request builder for creating requests to retrieve one `TestEntityCircularLinkChild` entity based on its keys.
   */
  getByKey(
    keyProperty: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TestEntityCircularLinkChild<T>, T> {
    return new GetByKeyRequestBuilder<TestEntityCircularLinkChild<T>, T>(
      this.entityApi,
      { KeyProperty: keyProperty }
    );
  }

  /**
   * Returns a request builder for querying all `TestEntityCircularLinkChild` entities.
   * @returns A request builder for creating requests to retrieve all `TestEntityCircularLinkChild` entities.
   */
  getAll(): GetAllRequestBuilder<TestEntityCircularLinkChild<T>, T> {
    return new GetAllRequestBuilder<TestEntityCircularLinkChild<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TestEntityCircularLinkChild` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TestEntityCircularLinkChild`.
   */
  create(
    entity: TestEntityCircularLinkChild<T>
  ): CreateRequestBuilder<TestEntityCircularLinkChild<T>, T> {
    return new CreateRequestBuilder<TestEntityCircularLinkChild<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TestEntityCircularLinkChild`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TestEntityCircularLinkChild`.
   */
  update(
    entity: TestEntityCircularLinkChild<T>
  ): UpdateRequestBuilder<TestEntityCircularLinkChild<T>, T> {
    return new UpdateRequestBuilder<TestEntityCircularLinkChild<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TestEntityCircularLinkChild`.
   * @param keyProperty Key property. See [[TestEntityCircularLinkChild.keyProperty]].
   * @returns A request builder for creating requests that delete an entity of type `TestEntityCircularLinkChild`.
   */
  delete(
    keyProperty: string
  ): DeleteRequestBuilder<TestEntityCircularLinkChild<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TestEntityCircularLinkChild`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TestEntityCircularLinkChild` by taking the entity as a parameter.
   */
  delete(
    entity: TestEntityCircularLinkChild<T>
  ): DeleteRequestBuilder<TestEntityCircularLinkChild<T>, T>;
  delete(
    keyPropertyOrEntity: any
  ): DeleteRequestBuilder<TestEntityCircularLinkChild<T>, T> {
    return new DeleteRequestBuilder<TestEntityCircularLinkChild<T>, T>(
      this.entityApi,
      keyPropertyOrEntity instanceof TestEntityCircularLinkChild
        ? keyPropertyOrEntity
        : { KeyProperty: keyPropertyOrEntity! }
    );
  }
}