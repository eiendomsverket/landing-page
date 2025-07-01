import * as React from 'react';
import './ConditionReportOverview.css';

export type ConditionReport = {
  id: string;
  title: string;
  status: string;
  severity: 'Lav' | 'Middels' | 'Høy';
  description: string;
  date: string;
  location: string;
  reporter: string;
  costEstimate: string;
};

const exampleReports: ConditionReport[] = [
  {
    id: '1',
    title: 'Vannlekkasje i kjeller',
    status: 'Under Behandling',
    severity: 'Høy',
    description: 'Oppdaget betydelig vannlekkasje fra hovedrør i kjelleren. Vannet har spredt seg over ca. 10 kvm og har skadet gulvbelegg og veggpanel.',
    date: '2025-06-15',
    location: 'Kjeller',
    reporter: 'Ola Nordmann',
    costEstimate: '45 000 kr'
  },
  {
    id: '2',
    title: 'Riper på vegg i stue',
    status: 'Fullført',
    severity: 'Lav',
    description: 'Mindre riper og skader på veggmaling i stue, sannsynligvis fra møbelflytting. Krever oppussing før visning.',
    date: '2025-05-20',
    location: 'Stue',
    reporter: 'Kari Nordmann',
    costEstimate: '3 500 kr'
  },
];

export default function ReportOverview({ reports = exampleReports }: { reports?: ConditionReport[] }) {
  return (
    <section className="report-overview-container" aria-label="Tilstandsrapporter">
      <ul className="report-list report-list--wide">
        {reports.map((report) => (
          <li className="report-card" key={report.id}>
            <article className="report-article">
              <header className="report-header-row">
                <div className="report-header-main">
                  <h2 className="report-title">{report.title}</h2>
                  <span className={`report-status-tag status-${report.status === 'Fullført' ? 'complete' : 'processing'}`}>{report.status}</span>
                  <span className={`report-severity-tag severity-${report.severity.toLowerCase()}`}>{report.severity}</span>
                </div>
              </header>
              <div className="report-description-row">
                <p className="report-description">{report.description}</p>
              </div>
              <div className="report-meta-row report-meta-row--wide">
                <span className="report-meta"><svg className="meta-icon" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="#8a8a8a" strokeWidth="2" fill="none"/><path d="M10 6v4l2.5 2.5" stroke="#8a8a8a" strokeWidth="2" strokeLinecap="round"/></svg>{report.date}</span>
                <span className="report-meta"><svg className="meta-icon" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z" stroke="#8a8a8a" strokeWidth="2" fill="none"/><circle cx="10" cy="9" r="2.5" fill="#8a8a8a"/></svg>{report.location}</span>
                <span className="report-meta"><svg className="meta-icon" viewBox="0 0 20 20"><circle cx="10" cy="7" r="4" stroke="#8a8a8a" strokeWidth="2" fill="none"/><path d="M2 18c0-3.31 3.58-6 8-6s8 2.69 8 6" stroke="#8a8a8a" strokeWidth="2" fill="none"/></svg>{report.reporter}</span>
                <span className="report-meta"><svg className="meta-icon" viewBox="0 0 20 20"><rect x="3" y="7" width="14" height="10" rx="2" stroke="#8a8a8a" strokeWidth="2" fill="none"/><path d="M3 10h14" stroke="#8a8a8a" strokeWidth="2"/></svg>{report.costEstimate}</span>
                <span className="report-meta"><svg className="meta-icon" viewBox="0 0 20 20"><rect x="4" y="4" width="12" height="12" rx="2" stroke="#8a8a8a" strokeWidth="2" fill="none"/><circle cx="10" cy="10" r="3" stroke="#8a8a8a" strokeWidth="2" fill="none"/></svg>{report.images.length} bilder</span>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
