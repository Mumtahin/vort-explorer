import { Box } from "@mui/material"
import { Mapbox } from "../components/Mapbox";
import { Bar } from "../components/charts/Bar";
import { MapGeoJSONFeature } from "react-map-gl";
import { useAppSelector } from "../hooks";
import { getRampsPerMaterial, getRampsPerSize } from "../utils/ramp";
import { Pie } from "../components/charts/Pie";

export const Dashboard = () => {
	const bgColour = '#191a1a';
	const textColour = '#fff';

	const rampGeoJson = useAppSelector(
		state => state.rampData
	)

	const rampsPerMaterial = getRampsPerMaterial(rampGeoJson.features);
	const rampsPerSize = getRampsPerSize(rampGeoJson.features);

	return (
		<div className="App" style={{ backgroundColor: bgColour, color: textColour }}>
			<Box display="flex" flexDirection="row" height="100vh">
				<Box flex={1}>
					<Box display="flex" flexDirection="column">
						<Box height="40vh" sx={{ m: 3 }}>
							{/* <Bar data={rampsPerMaterial} /> */}
							<Pie data={rampsPerMaterial} />
						</Box>
						<Box height="40vh" flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								{/* <Bar data={rampsPerSize} /> */}
								<Pie data={rampsPerSize} />
							</Box>
						</Box>
					</Box>
				</Box>
				<Box flex={3}>
					<Mapbox data={rampGeoJson as unknown as MapGeoJSONFeature} />
				</Box>
			</Box>
		</div >
	)
}
