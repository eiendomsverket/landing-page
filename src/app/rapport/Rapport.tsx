"use client";
import * as React from 'react';
import AppTheme from '@/app/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ColorModeIconDropdown from '@/app/shared-theme/ColorModeIconDropdown';
import ShieldIcon from './component/ShieldIcon';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const exampleReports = [
	{
		id: 1,
		title: 'Rapport 1',
		status: 'Fullført',
		severity: 'Lav',
		description: 'Dette er en beskrivelse av rapport 1.',
		date: '2023-10-01',
		location: 'Oslo',
		reporter: 'Ola Nordmann',
		costEstimate: '1000 kr',
		images: [
			'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
			'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
		],
	},
	{
		id: 2,
		title: 'Rapport 2',
		status: 'Pågående',
		severity: 'Middels',
		description: 'Dette er en beskrivelse av rapport 2.',
		date: '2023-10-02',
		location: 'Bergen',
		reporter: 'Kari Nordmann',
		costEstimate: '2000 kr',
		images: [],
	},
	{
		id: 3,
		title: 'Rapport 3',
		status: 'Ikke startet',
		severity: 'Høy',
		description: 'Dette er en beskrivelse av rapport 3.',
		date: '2023-10-03',
		location: 'Stavanger',
		reporter: 'Per Hansen',
		costEstimate: '1500 kr',
		images: [
			'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
		],
	},
];

const severityColor = {
	Lav: 'success',
	Middels: 'warning',
	Høy: 'error',
} as const;

export default function Rapport(props: { disableCustomTheme?: boolean }) {
	return (
		<AppTheme {...props}>
			<CssBaseline enableColorScheme />
			<Container maxWidth="md" disableGutters sx={{ minHeight: '100vh', bgcolor: 'background.default', p: 0 }}>
				<Paper elevation={0} square sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
					<Box sx={{ px: { xs: 1, sm: 2, md: 3 }, pb: 4 }}>
						<Paper
							elevation={1}
							sx={{
								display: 'flex',
								alignItems: 'center',
								bgcolor: 'background.paper',
								borderBottom: 1,
								borderColor: 'divider',
								boxShadow: 1,
								px: { xs: 2, sm: 3 },
								py: { xs: 2, sm: 3 },
								mb: 3,
							}}
						>
							<Box
								sx={{
									background: '#2563eb',
									borderRadius: 2,
									width: 64,
									height: 64,
									minWidth: 64,
									minHeight: 64,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									boxShadow: '0 1px 4px 0 rgba(37,99,235,0.10)',
									mr: 3,
								}}
							>
								<ShieldIcon width={40} height={40} />
							</Box>
							<Box sx={{ flex: 1 }}>
								<Typography variant="h4" fontWeight={700} color="text.primary" gutterBottom>
									Skaderapport System
								</Typography>
								<Typography variant="subtitle1" color="text.secondary">
									Registrer og administrer skaderapporter
								</Typography>
							</Box>
							<Box>
								<ColorModeIconDropdown />
							</Box>
						</Paper>
						<Stack spacing={3}>
							{exampleReports.map((report) => (
								<Paper key={report.id} variant="outlined" sx={{ p: { xs: 2, sm: 3 }, bgcolor: 'background.paper' }}>
									<Stack direction="column" spacing={2} alignItems="flex-start">
										<Stack direction="row" alignItems="center" spacing={1} mb={1} sx={{ flexWrap: 'wrap' }}>
											<Typography variant="h6" fontWeight={600} color="text.primary">
												{report.title}
											</Typography>
											<Chip label={report.status} size="small" color={report.status === 'Fullført' ? 'success' : 'info'} />
											<Chip label={report.severity} size="small" color={severityColor[report.severity]} />
										</Stack>
										{report.images.length > 0 && (
											<Stack direction="row" spacing={1} mt={1} mb={1} sx={{ flexWrap: 'wrap' }}>
												{report.images.map((img, idx) => (
													<Box key={idx} sx={{ width: 72, height: 54, display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', background: '#f3f4f6', borderRadius: 1 }}>
														<img
															src={img}
															alt={report.title}
															loading="lazy"
															style={{ borderRadius: 6, objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
														/>
													</Box>
												))}
											</Stack>
										)}
										<Typography variant="body2" color="text.secondary" mb={1}>
											{report.description}
										</Typography>
										<Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" divider={<Divider orientation="vertical" flexItem />}>
											<Typography variant="caption" color="text.secondary">Dato: {report.date}</Typography>
											<Typography variant="caption" color="text.secondary">Sted: {report.location}</Typography>
											<Typography variant="caption" color="text.secondary">Rapportør: {report.reporter}</Typography>
											<Typography variant="caption" color="text.secondary">Kostnad: {report.costEstimate}</Typography>
											<Typography variant="caption" color="text.secondary">Bilder: {report.images.length}</Typography>
										</Stack>
									</Stack>
								</Paper>
							))}
						</Stack>
					</Box>
				</Paper>
			</Container>
		</AppTheme>
	);
}