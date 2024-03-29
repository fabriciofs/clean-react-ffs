import { LocalSaveAccessToken } from '@/data/usecases/sace-access-token/local-save-access-token'
import { SaveAccessToken } from '@/domain/usecases'
import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'

export const makeLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
