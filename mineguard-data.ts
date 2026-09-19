export type RiskLevel = 'HIGH' | 'MEDIUM' | 'LOW';
export type IssueStatus = 'ASSIGNED' | 'ACTION IN PROGRESS' | 'PENDING' | 'RESOLVED' | 'UNDER REVIEW' | 'PENDING VERIFICATION';

export type Mine = {
  id: string;
  name: string;
  location: string;
  safetyStatus: string;
  totalIssues: number;
  highRisk: number;
  mediumRisk: number;
  lowRisk: number;
  openIssues: number;
  closedIssues: number;
};

export type Issue = {
  id: string;
  title: string;
  mineId: string;
  category: string;
  risk: RiskLevel;
  assignedOfficer: string;
  workerName: string;
  workerId: string;
  zone: string;
  date: string;
  status: IssueStatus;
  description: string;
  riskAnalysis: string;
  sensorData: string;
  investigation: string;
  correctiveAction: string;
  proof: string;
  verificationStatus: string;
};

export type TaskItem = {
  id: string;
  issueId: string;
  issue: string;
  mine: string;
  risk: RiskLevel;
  assignedOfficer: string;
  dueDate: string;
  status: string;
  description: string;
  actionTaken: string;
  proof: string;
  currentStatus: string;
};

export type Worker = {
  id: string;
  name: string;
  mineId: string;
  zone: string;
  status: string;
  lastCheck: string;
};

export type Officer = {
  id: string;
  name: string;
  mineId: string;
  role: string;
  shift: string;
  status: string;
};

export type SensorReading = {
  id: string;
  mineId: string;
  location: string;
  reading: string;
  value: string;
  timestamp: string;
  status: string;
};

export type ReportItem = {
  id: string;
  name: string;
  type: 'Automatic ATR' | 'Compliance Report' | 'Analytics Report';
  generatedOn: string;
  status: 'Completed' | 'Generated' | 'Draft';
  mine?: string;
  totalIssues?: number;
  highRisk?: number;
  resolved?: number;
  pending?: number;
  complianceRate?: number;
  issueTrends?: string;
  riskDistribution?: string;
  mineComparison?: string;
  resolutionTrends?: string;
};

export const mines: Mine[] = [
  {
    id: 'geva-mine',
    name: 'Geva Mine',
    location: 'Korba District',
    safetyStatus: 'Moderate Risk',
    totalIssues: 12,
    highRisk: 4,
    mediumRisk: 5,
    lowRisk: 3,
    openIssues: 7,
    closedIssues: 5,
  },
  {
    id: 'korba-mine',
    name: 'Korba Mine',
    location: 'Korba Region',
    safetyStatus: 'Stable',
    totalIssues: 9,
    highRisk: 2,
    mediumRisk: 4,
    lowRisk: 3,
    openIssues: 5,
    closedIssues: 4,
  },
  {
    id: 'taicher-mine',
    name: 'Taicher Mine',
    location: 'South Sector',
    safetyStatus: 'Watchlist',
    totalIssues: 15,
    highRisk: 5,
    mediumRisk: 7,
    lowRisk: 3,
    openIssues: 9,
    closedIssues: 6,
  },
];

export const workers: Worker[] = [
  { id: 'W-101', name: 'Ravi Sharma', mineId: 'geva-mine', zone: 'Zone B', status: 'SAFE', lastCheck: '12 min ago' },
  { id: 'W-102', name: 'Anil Verma', mineId: 'geva-mine', zone: 'Loading Area', status: 'SAFE', lastCheck: '18 min ago' },
  { id: 'W-201', name: 'Nikhil Rao', mineId: 'korba-mine', zone: 'Zone D', status: 'SAFE', lastCheck: '9 min ago' },
  { id: 'W-301', name: 'Sachin Tiwari', mineId: 'taicher-mine', zone: 'Underground Section', status: 'WATCHLIST', lastCheck: '24 min ago' },
];

export const officers: Officer[] = [
  { id: 'O-201', name: 'S. Mehta', mineId: 'geva-mine', role: 'Safety Officer', shift: 'A Shift', status: 'On Duty' },
  { id: 'O-202', name: 'R. Kumar', mineId: 'korba-mine', role: 'Compliance Officer', shift: 'B Shift', status: 'On Duty' },
  { id: 'O-203', name: 'A. Singh', mineId: 'taicher-mine', role: 'Mine Officer', shift: 'A Shift', status: 'Field Review' },
];

export const issues: Issue[] = [
  {
    id: 'MG360-001',
    title: 'Slope instability observed',
    mineId: 'geva-mine',
    category: 'Geotechnical',
    risk: 'HIGH',
    assignedOfficer: 'S. Mehta',
    workerName: 'Ravi Sharma',
    workerId: 'W-101',
    zone: 'Zone B',
    date: '18 Sep 2026',
    status: 'UNDER REVIEW',
    description: 'Visible crack progression on the north wall and unstable rock face near haul road edge.',
    riskAnalysis: 'High likelihood of structural deterioration if the area remains unattended.',
    sensorData: 'Slope monitor: 14.2 mm movement / hour; vibration reading: 2.8 g.',
    investigation: 'Inspection team confirmed crack extension and restricted access to the active zone.',
    correctiveAction: 'Restricted access and installed temporary support barriers around the risk zone.',
    proof: 'Photo log 01, Survey 2026-09-18',
    verificationStatus: 'Pending verification',
  },
  {
    id: 'MG360-002',
    title: 'Damaged safety equipment',
    mineId: 'korba-mine',
    category: 'Equipment',
    risk: 'MEDIUM',
    assignedOfficer: 'R. Kumar',
    workerName: 'Nikhil Rao',
    workerId: 'W-201',
    zone: 'Loading Area',
    date: '19 Sep 2026',
    status: 'ASSIGNED',
    description: 'Safety harness and emergency beacon station were found partially damaged near the loading area.',
    riskAnalysis: 'Medium risk due to reduced readiness in emergency response equipment.',
    sensorData: 'Beacon diagnostics: 78% battery; harness tag status: service due.',
    investigation: 'Inventory review confirmed replacement parts are available for quick turnaround.',
    correctiveAction: 'Replacement equipment assigned and service schedule updated.',
    proof: 'Equipment inspection report',
    verificationStatus: 'Awaiting approval',
  },
  {
    id: 'MG360-003',
    title: 'Dust emission above threshold',
    mineId: 'taicher-mine',
    category: 'Environment',
    risk: 'MEDIUM',
    assignedOfficer: 'A. Singh',
    workerName: 'Sachin Tiwari',
    workerId: 'W-301',
    zone: 'Underground Section',
    date: '17 Sep 2026',
    status: 'ACTION IN PROGRESS',
    description: 'Dust emission reading exceeded operational safety limits in the tunnel section.',
    riskAnalysis: 'Respiratory exposure risk remains elevated without mitigation control.',
    sensorData: 'PM2.5: 182 μg/m³; ventilation flow: 68% of target.',
    investigation: 'Ventilation logs reviewed; emergency air scrubbers activated in the affected zone.',
    correctiveAction: 'Dust suppression cycle increased and worker rotation adjusted.',
    proof: 'Dust monitoring sheet, CCTV stills',
    verificationStatus: 'In progress',
  },
  {
    id: 'MG360-004',
    title: 'Forklift brake irregularity',
    mineId: 'geva-mine',
    category: 'Equipment',
    risk: 'HIGH',
    assignedOfficer: 'S. Mehta',
    workerName: 'Anil Verma',
    workerId: 'W-102',
    zone: 'Haul Road',
    date: '15 Sep 2026',
    status: 'RESOLVED',
    description: 'Brake response delay observed during a routine equipment check on one haul forklift.',
    riskAnalysis: 'High risk to operator safety if machine remains in operation.',
    sensorData: 'Brake temperature: 118°C; pressure variance: 12%.',
    investigation: 'Forklift taken out of service immediately and workshop diagnostics initiated.',
    correctiveAction: 'Brake unit replaced and machine placed back into service after verification.',
    proof: 'Workshop service ticket',
    verificationStatus: 'Verified',
  },
];

export const tasks: TaskItem[] = [
  {
    id: 'MG360-TASK-001',
    issueId: 'MG360-001',
    issue: 'Slope instability observed',
    mine: 'Geva Mine',
    risk: 'HIGH',
    assignedOfficer: 'S. Mehta',
    dueDate: '25 Sep 2026',
    status: 'ACTION IN PROGRESS',
    description: 'Inspect and stabilize the crack progression near the haul road edge.',
    actionTaken: 'Temporary barriers installed and work zone restricted.',
    proof: 'Survey image and access restriction notice',
    currentStatus: 'Action plan underway',
  },
  {
    id: 'MG360-TASK-002',
    issueId: 'MG360-002',
    issue: 'Damaged safety equipment',
    mine: 'Korba Mine',
    risk: 'MEDIUM',
    assignedOfficer: 'R. Kumar',
    dueDate: '27 Sep 2026',
    status: 'ASSIGNED',
    description: 'Replace emergency beacons and verify response readiness in the loading area.',
    actionTaken: 'Replacement order created and service schedule assigned.',
    proof: 'Inventory list and equipment request',
    currentStatus: 'Assigned for replacement',
  },
];

export const sensorReadings: SensorReading[] = [
  { id: 'S-001', mineId: 'geva-mine', location: 'Zone B', reading: 'Slope Monitor', value: '14.2 mm/h', timestamp: '18 Sep 2026, 15:40', status: 'High' },
  { id: 'S-002', mineId: 'geva-mine', location: 'Haul Road', reading: 'Vibration', value: '2.8 g', timestamp: '18 Sep 2026, 15:45', status: 'Moderate' },
  { id: 'S-003', mineId: 'korba-mine', location: 'Loading Area', reading: 'Beacon', value: '78%', timestamp: '19 Sep 2026, 09:30', status: 'Ready' },
  { id: 'S-004', mineId: 'taicher-mine', location: 'Underground Section', reading: 'PM2.5', value: '182 μg/m³', timestamp: '17 Sep 2026, 13:20', status: 'Elevated' },
];

export const reports: ReportItem[] = [
  { id: 'ATR-0001', name: 'ATR - MG360-0001', type: 'Automatic ATR', generatedOn: '18 Sep 2026', status: 'Completed' },
  { id: 'C-0001', name: 'Compliance Snapshot', type: 'Compliance Report', generatedOn: '15 Sep 2026', status: 'Generated', mine: 'Geva Mine', totalIssues: 12, highRisk: 4, resolved: 5, pending: 3, complianceRate: 82 },
  { id: 'A-0001', name: 'Analytics Summary', type: 'Analytics Report', generatedOn: '12 Sep 2026', status: 'Draft', issueTrends: 'Down 8%', riskDistribution: 'High risk reduced by 3%', mineComparison: 'Geva vs Korba pit safety', resolutionTrends: 'Resolution speed improved 12%' },
];

export const defaultSettings = {
  profile: {
    name: 'Ravi Kumar',
    email: 'ravi.kumar@mineguard360.in',
    role: 'Admin',
    employeeId: 'ADMIN001',
  },
  notifications: {
    safetyAlerts: true,
    criticalRiskAlerts: true,
    taskUpdates: true,
    verificationUpdates: false,
  },
  security: {
    currentPassword: 'admin123',
    newPassword: '',
    confirmPassword: '',
  },
  preferences: {
    theme: 'Dark',
    language: 'English',
    dateFormat: 'DD/MM/YYYY',
  },
};

export const getMineById = (mineId: string) => mines.find((mine) => mine.id === mineId) ?? mines[0];
export const getIssuesByMine = (mineId: string) => issues.filter((issue) => issue.mineId === mineId);
export const getWorkersByMine = (mineId: string) => workers.filter((worker) => worker.mineId === mineId);
export const getOfficersByMine = (mineId: string) => officers.filter((officer) => officer.mineId === mineId);
export const getSensorByMine = (mineId: string) => sensorReadings.filter((sensor) => sensor.mineId === mineId);
