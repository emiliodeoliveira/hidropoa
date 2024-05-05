export class GuaibaInfo{
    public date: Date;
    private precipitation: number;
    private river_flow_rate: number;
    private river_level: number;
    private station_id: number;

    constructor(date: Date, precipitation: number,river_flow_rate: number, river_level: number,station_id: number) {
        this.date = date;
        this.precipitation = precipitation;
        this.river_flow_rate = river_flow_rate;
        this.river_level = river_level;
        this.station_id = station_id
    }

    getDate(){
        return this.date
    }
    getRiverLevel(){
        return this.river_level
    }
    getPrecipitationValue(){
        return this.precipitation
    }
}