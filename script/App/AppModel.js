import { PanelController } from '../Panel/PanelController';

class AppModel {
  panels = [new PanelController(), new PanelController()];
  activePanel = this.panels[0];

  constructor() {}
}
