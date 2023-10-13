import { Box } from "@mui/material"
import { Mapbox } from "../components/Map";

export const Dashboard = () => {
	const bgColor = '#191a1a';

	return (
		<div className="App" style={{ backgroundColor: bgColor }}>
			<Box display="flex" flexDirection="row" height="100vh">
				<Box flex={1}>
					<Box height="40vh" display="flex" flexDirection="column">
						<Box flex={1}>
							<Box height="40vh" sx={{ m: 3 }}>
								Chart
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
					<Mapbox />
				</Box>
			</Box>
		</div >
	)
}