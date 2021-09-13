/**
 * Generated by orval v6.0.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { CreatePetsBody, ListPetsParams, Pet, Pets } from '../model';
import { customInstance } from '../mutator/custom-instance';

export const getSwaggerPetstore = () => {
  const listPets = <TData = Pets>(params?: ListPetsParams, version = 1) => {
    return customInstance<TData>({
      url: `/v${version}/pets`,
      method: 'get',
      params,
    });
  };
  const createPets = <TData = void>(
    createPetsBody: CreatePetsBody,
    version = 1,
  ) => {
    return customInstance<TData>({
      url: `/v${version}/pets`,
      method: 'post',
      data: createPetsBody,
    });
  };
  const showPetById = <TData = Pet>(petId: string, version = 1) => {
    return customInstance<TData>({
      url: `/v${version}/pets/${petId}`,
      method: 'get',
    });
  };
  return { listPets, createPets, showPetById };
};
