export interface PromiseWithStatus<T> extends Promise<T> {
  isPending?: () => boolean;
  isFulfilled?: () => boolean;
  isRejected?: () => boolean;
}

export const promiseWithStatus = <T>(
  promise: Promise<T>
): PromiseWithStatus<T> => {
  let isPending = true;
  let isRejected = false;
  let isFulfilled = false;

  const result: PromiseWithStatus<T> = promise.then(
    (value) => {
      isFulfilled = true;
      isPending = false;
      return value;
    },
    (error) => {
      isRejected = true;
      isPending = false;
      throw error;
    }
  );

  result.isFulfilled = () => {
    return isFulfilled;
  };

  result.isPending = () => {
    return isPending;
  };

  result.isRejected = () => {
    return isRejected;
  };

  return result;
};
