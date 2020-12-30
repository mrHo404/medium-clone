import {Injectable} from '@angular/core'

@Injectable()
export class PersistanceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error saving to persistence', e)
    }
  }

  get(key: string): any {
    const storedData = localStorage.getItem(key)

    return storedData ? JSON.parse(storedData) : undefined
    // : console.error(`Getting ${key} from persistence failed`)
  }
}
