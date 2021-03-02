export class ConfettiSettings {
  constructor(
    public target?: string,
    public max?: number,
    public size?: number,
    public animate?: boolean,
    public props?: any[],
    public colors?: any[],
    public clock?: number,
    public rotate?: boolean,
    public width?: number,
    public height?: number,
    public start_from_edge?: boolean,
    public respawn?: boolean
  ) {}
}
