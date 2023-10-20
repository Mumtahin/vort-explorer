import { Box } from "@mui/material"
import { Mapbox } from "../components/Mapbox";
import { Bar } from "../components/charts/Bar";
import { MapGeoJSONFeature } from "react-map-gl";
import { useAppSelector } from "../hooks";
import { getMaterialCount } from "../utils/ramp";

export const Dashboard = () => {
	const bgColour = '#191a1a';
	const textColour = '#fff';

	const rampGeoJson = useAppSelector(
		state => state.rampData
	)

	const rampPerMaterial = getMaterialCount(rampGeoJson.features);

	console.log('rampPerMaterial', rampPerMaterial)

	return (
		<div className="App" style={{ backgroundColor: bgColour, color: textColour }}>
			<Box display="flex" flexDirection="row" height="100vh">
				<Box flex={1}>
					<Box height="40vh" display="flex" flexDirection="column">
						<Box flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								<Bar data={rampPerMaterial} />
							</Box>
						</Box>
						<Box height="40vh" flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								Chart
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
