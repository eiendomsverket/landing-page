"use client";
import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import AppTheme from "@/app/shared-theme/AppTheme";
import Header from './component/Header';
import ReportActions from './component/ReportActions';
import ConditionReportOverview from './component/ConditionReportOverview';

export default function Rapport(props: { disableCustomTheme?: boolean }) {
  return (

      <div className="rapport-main-wrapper">
        <AppTheme {...props}>
          <CssBaseline enableColorScheme/>
          <Header/>
          <ReportActions/>
            <ConditionReportOverview/>
        </AppTheme>
      </div>

  );
}