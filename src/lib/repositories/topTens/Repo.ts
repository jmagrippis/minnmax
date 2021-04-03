export interface TopTensRepo {
  latest(): Promise<unknown[]>
}
