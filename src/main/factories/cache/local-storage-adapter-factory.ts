import { SetStorage } from '@/data/protocols/cache'
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapte/local-storage-adapter'
export const makeLocalStorageAdapter = (): SetStorage => {
  return new LocalStorageAdapter()
}
