import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import rampData from '../data/boat_ramps.json';

export interface RampData {
  type: string;
  totalFeatures: number;
  features: Feature[];
};
export interface Feature {
  type: string;
  id: string;
  geometry: Geometry;
  geometry_name: string;
  properties: Properties;
};
export interface Geometry {
  type: string;
  coordinates?: ((((number)[] | null)[] | null)[] | null)[] | null;
};
export interface Properties {
  rec_id: number;
  status: string;
  asset_numb: string;
  type: string;
  material: string;
  number_lan: number;
  add_improv: string;
  top_rl: number;
  toe_rl: number;
  area_: number;
  comments: string;
  documents: string;
  inspectors?: null;
  inspection: string;
  constructi?: null;
  record_cre: string;
  last_updat?: null;
  update_dat: string;
  disposal_d?: null;
  positional: string;
  level_accu?: null;
  owner: string;
  project_nu?: null;
  file_numbe?: null;
  folder_num?: null;
  drawing_nu?: null;
  survey_num?: null;
  condition: number;
  historic_c: number;
  funding_ba: string;
  mi_symbolo: string;
  mi_prinx: number;
  createuser?: null;
  createdate?: null;
  updateuser?: null;
  updatedate?: null;
  shape_leng: number;
  shape_area: number;
};

const initialState = rampData.features as RampData['features'];

export const rampSlice = createSlice({
  name: 'ramp',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<Feature[]>) => {
      state = action.payload
    }
  }
});

export const { filter } = rampSlice.actions;

export default rampSlice.reducer;
