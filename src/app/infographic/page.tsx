'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
} from 'recharts';
import {
  Shield,
  Clock,
  Users,
  AlertTriangle,
  Smartphone,
  QrCode,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Phone,
  Pill,
  Droplet,
  Stethoscope,
  UserCheck,
  Eye,
  HeartPulse,
} from 'lucide-react';

const emergencyTimelineData = [
  { minute: 0, survival: 100 },
  { minute: 2, survival: 95 },
  { minute: 5, survival: 80 },
  { minute: 10, survival: 60 },
  { minute: 15, survival: 40 },
];

const costComparisonData = [
  { item: 'QR System', cost: 12, color: '#10b981' },
  { item: 'Pep Rally\nInjury', cost: 10500000, color: '#f59e0b' },
  { item: 'Brain Injury\nSettlement', cost: 4400000, color: '#ef4444' },
];

const emergencyPreparednessData = [
  { name: 'Fully Prepared', value: 11, color: '#10b981' },
  { name: 'Partially Prepared', value: 61, color: '#f59e0b' },
  { name: 'Unprepared', value: 28, color: '#ef4444' },
];

export default function QRMedicalInfographic() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Compressed Hero Section */}
      <section className="px-4 pt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-4 mb-6">
            <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
              <QrCode className="w-12 h-12 text-cyan-400" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
                RapidMed
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Compressed Problem + Stats */}
      <section className="px-4 py-2">
        <div className="max-w-6xl mx-auto">
          {/* Problem Summary */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-8">
            <p className="text-lg text-gray-300 text-center leading-relaxed">
              <strong className="text-white">Picture this:</strong> It&apos;s
              the championship game, and your star player collapses on the
              field. The coach frantically searches for medical information
              while paramedics arrive. Schools are not prepared for emergencies
              like this that happen every day.
            </p>
          </div>

          {/* Emergency Preparedness Pie Chart */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-8">
            <h4 className="text-xl font-bold text-center mb-4">
              School Emergency Preparedness Levels
            </h4>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={emergencyPreparednessData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {emergencyPreparednessData.map(entry => (
                        <Cell key={`cell-${entry.name}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                      formatter={value => [`${value}%`, 'Percentage']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Fully Prepared</span>
                      <span className="text-green-400 font-bold">11%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-6">
                      <div
                        className="bg-green-500 h-6 rounded-full flex items-center justify-center"
                        style={{ width: '11%' }}
                      >
                        <span className="text-xs font-bold text-white">
                          11%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Partially Prepared</span>
                      <span className="text-orange-400 font-bold">61%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-6">
                      <div
                        className="bg-orange-500 h-6 rounded-full flex items-center justify-center"
                        style={{ width: '61%' }}
                      >
                        <span className="text-xs font-bold text-white">
                          61%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold">Unprepared</span>
                      <span className="text-red-400 font-bold">28%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-6">
                      <div
                        className="bg-red-500 h-6 rounded-full flex items-center justify-center"
                        style={{ width: '28%' }}
                      >
                        <span className="text-xs font-bold text-white">
                          28%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 italic text-center mt-4 border-t border-gray-600 pt-2">
                  Source: Johnson, S.T., et al. &quot;Sports-Related Emergency
                  Preparedness in Oregon High Schools&quot; (2017)
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {/* Key Stats */}
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-4 border border-red-500/30">
              <Users className="w-8 h-8 text-red-400 mb-2" />
              <div className="text-2xl font-black text-red-400">775,000+</div>
              <div className="text-sm font-semibold">
                The number of annual sports injuries for children 14 and under.
              </div>
              <div className="text-xs text-gray-500 italic mt-1">
                Johns Hopkins Medicine
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30">
              <AlertTriangle className="w-8 h-8 text-orange-400 mb-2" />
              <div className="text-2xl font-black text-orange-400">62%</div>
              <div className="text-sm font-semibold">
                The percentage of injuries that occur during practice.
              </div>
              <div className="text-xs text-gray-500 italic mt-1">
                Johns Hopkins Medicine
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-4 border border-blue-500/30">
              <Clock className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-2xl font-black text-blue-400">
                10 minutes
              </div>
              <div className="text-sm font-semibold">
                The first 10 minutes of an emergency response are critical to
                the patient&apos;s outcome
              </div>
              <div className="text-xs text-gray-500 italic mt-1">
                Casa et al.
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 border border-purple-500/30">
              <DollarSign className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-2xl font-black text-purple-400">$4.4M+</div>
              <div className="text-sm font-semibold">
                The possible cost of a injury settlement.
              </div>
              <div className="text-xs text-gray-500 italic mt-1">
                Levin & Perconti
              </div>
            </div>
          </div>

          {/* Compact Charts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Emergency Timeline */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-center">
                Emergency Response Timeline
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={emergencyTimelineData}
                    margin={{ bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />

                    <XAxis
                      dataKey="minute"
                      tick={{ fill: '#ffffff', fontSize: 10 }}
                      label={{
                        value: 'Time (minutes)',
                        position: 'insideBottom',
                        offset: -5,
                        style: {
                          textAnchor: 'middle',
                          fill: '#ffffff',
                          fontSize: '12px',
                        },
                      }}
                    />
                    <YAxis
                      tick={{ fill: '#ffffff', fontSize: 10 }}
                      label={{
                        value: 'Survival Rate (%)',
                        angle: -90,
                        position: 'insideLeft',
                        style: {
                          textAnchor: 'middle',
                          fill: '#ffffff',
                          fontSize: '12px',
                        },
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="survival"
                      stroke="#ef4444"
                      fill="#ef444440"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-gray-500 italic text-center mt-2">
                Casa et al. (NATA)
              </div>
            </div>
            {/* Emergency Response Timeline */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                <strong className="text-white">
                  The emergency response timeline:
                </strong>{' '}
                The first 10 minutes of an emergency response are critical to
                the patient&apos;s outcome. In those crucial minutes, having
                immediate access to medical information could mean the
                difference between proper treatment and a dangerous delay.
              </p>
              <div className="text-xs text-gray-500 italic text-center mt-3 border-t border-gray-600 pt-2">
                Source: Casa et al., &quot;National Athletic Trainers&apos;
                Association Position Statement&quot; (2024)
              </div>
            </div>
            {/* Financial Consequences */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <p className="text-lg text-gray-300 text-center leading-relaxed">
                <strong className="text-white">
                  The financial consequences:
                </strong>{' '}
                Recent settlements demonstrate the severe financial consequences
                of inadequate emergency response. A $4.4 million settlement was
                awarded to a former high school athlete who suffered permanent
                brain injury when athletic trainers ignored concussion symptoms,
                and in June of 2016, $10.5 million was awarded to a California
                student injured during a pep rally when officials failed to
                intervene promptly.
              </p>
              <div className="text-xs text-gray-500 italic text-center mt-3 border-t border-gray-600 pt-2">
                Sources: Levin & Perconti (2023) & National Federation of State
                High School Associations (2016)
              </div>
            </div>
            {/* Cost Comparison */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-center">
                Cost Comparison
              </h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={costComparisonData} margin={{ bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis
                      dataKey="item"
                      tick={{ fill: '#ffffff', fontSize: 10 }}
                      angle={-35}
                      textAnchor="end"
                    />
                    <YAxis
                      scale="log"
                      domain={[1, 10000000]}
                      tick={{ fill: '#ffffff', fontSize: 10 }}
                      tickFormatter={value => {
                        if (value >= 1000000)
                          return `$${(value / 1000000).toFixed(1)}M`;
                        if (value >= 1000)
                          return `$${(value / 1000).toFixed(0)}K`;
                        return `$${value}`;
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        color: '#ffffff',
                      }}
                      labelStyle={{
                        color: '#ffffff',
                      }}
                      itemStyle={{
                        color: '#ffffff',
                      }}
                      formatter={value => [
                        `$${value.toLocaleString()}`,
                        'Cost',
                      ]}
                    />
                    <Bar dataKey="cost" radius={[4, 4, 0, 0]}>
                      {costComparisonData.map(entry => (
                        <Cell key={`cell-${entry.item}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="text-xs text-gray-500 italic text-center mt-2">
                Levin & Perconti, NFHS
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-white/10 mt-8">
            <h3 className="text-lg font-bold mb-3 text-center">
              Supporting Research Evidence
            </h3>
            <div className="space-y-4">
              <div className="bg-red-500/20 backdrop-blur-xl rounded-xl p-4 border border-red-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-1">
                    2 Million
                  </div>
                  <div className="text-sm font-semibold">
                    High School Injuries Yearly
                  </div>
                  <div className="text-xs text-gray-500 italic mt-1">
                    AdventHealth study
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur-xl rounded-xl p-4 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    87%
                  </div>
                  <div className="text-sm font-semibold">
                    Healthcare Professionals Use Smartphones
                  </div>
                  <div className="text-xs text-gray-500 italic mt-1">
                    Mobile Devices in Healthcare study
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur-xl rounded-xl p-4 border border-green-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    73.33%
                  </div>
                  <div className="text-sm font-semibold">
                    QR Code Efficiency Improvement
                  </div>
                  <div className="text-xs text-gray-500 italic mt-1">
                    Joshi & Sawant research
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Compressed Solution Section */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            The Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* How It Works */}
            <div>
              <h3 className="text-xl font-bold mb-4">How It Works</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-green-500/20 backdrop-blur-xl rounded-xl p-3 mb-2">
                    <Smartphone className="w-8 h-8 text-green-400 mx-auto" />
                  </div>
                  <div className="text-sm font-semibold">1. Scan</div>
                  <div className="text-xs text-gray-400">
                    Point phone camera
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-blue-500/20 backdrop-blur-xl rounded-xl p-3 mb-2">
                    <Eye className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div className="text-sm font-semibold">2. View</div>
                  <div className="text-xs text-gray-400">See medical info</div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-500/20 backdrop-blur-xl rounded-xl p-3 mb-2">
                    <HeartPulse className="w-8 h-8 text-purple-400 mx-auto" />
                  </div>
                  <div className="text-sm font-semibold">3. Act</div>
                  <div className="text-xs text-gray-400">Provide care</div>
                </div>
              </div>

              <div className="mt-6 bg-green-500/20 backdrop-blur-xl rounded-xl p-4 border border-green-500/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    73.33%
                  </div>
                  <div className="text-sm font-semibold">
                    Healthcare Efficiency Improvement
                  </div>
                  <div className="text-xs text-gray-500 italic mt-1">
                    Joshi & Sawant
                  </div>
                </div>
              </div>
            </div>

            {/* What Information */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                Information Instantly Available
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2 p-3 bg-red-500/20 rounded-xl">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-sm font-medium">Allergies</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-blue-500/20 rounded-xl">
                  <Pill className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">Medications</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-red-600/20 rounded-xl">
                  <Droplet className="w-5 h-5 text-red-400" />
                  <span className="text-sm font-medium">Blood Type</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-green-500/20 rounded-xl">
                  <Stethoscope className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Conditions</span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-purple-500/20 rounded-xl">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">
                    Emergency Contacts
                  </span>
                </div>
                <div className="flex items-center space-x-2 p-3 bg-orange-500/20 rounded-xl">
                  <UserCheck className="w-5 h-5 text-orange-400" />
                  <span className="text-sm font-medium">Primary Doctor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation & Call to Action */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Implementation */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">
                Implementation Timeline
              </h2>
              <div className="space-y-4">
                <div className="bg-green-500/20 backdrop-blur-xl rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <div className="font-bold">Development Complete ✓</div>
                      <div className="text-sm text-gray-400">
                        Website & database ready
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/20 backdrop-blur-xl rounded-xl p-4 border border-blue-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <div className="font-bold">Pilot Program</div>
                      <div className="text-sm text-gray-400">
                        Launch with one EVHS team
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/20 backdrop-blur-xl rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="font-bold">Full Rollout</div>
                      <div className="text-sm text-gray-400">
                        All athletic programs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Save Lives?
              </h2>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-6">
                <div className="text-center mb-4">
                  <div className="text-4xl font-black text-green-400 mb-2">
                    $12/year
                  </div>
                  <div className="text-lg font-semibold">Per Student Cost</div>
                  <div className="text-sm text-gray-400">
                    vs. millions in lawsuit risk
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm">
                      Approve pilot program this spring
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <span className="text-sm">
                      Full implementation next school year
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-sm">
                      Prioritize student safety above all
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Student safety should be our top priority.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="bg-black/50 backdrop-blur-xl py-6 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">
                Submitted by Cody Kilpatrick
              </h3>
              <div className="text-gray-400 text-sm">
                <p>English 15 Assignment 4 - Infographic</p>
                <p>
                  Eastern View High School, Culpeper, Virginia • August 13, 2025
                </p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
              <h4 className="font-bold mb-2 text-sm">Key References</h4>
              <div className="text-xs text-gray-400 space-y-1">
                <p>
                  • Casa, D.J., et al. (2024). NATA Position Statement.{' '}
                  <em>Journal of Athletic Training</em>, 59(6).
                </p>
                <p>
                  • Johns Hopkins Medicine. (2024). Sports Injury Statistics.
                </p>
                <p>
                  • Johnson, S.T., et al. (2017). Sports-Related Emergency
                  Preparedness in Oregon High Schools. <em>Sports Health</em>,
                  9(2), 181-184.
                </p>
                <p>
                  • Joshi, P., & Sawant, S. (2024). QR Codes in Healthcare.{' '}
                  <em>Annals of Medicine and Surgery</em>, 104.
                </p>
                <p>
                  • Levin & Perconti. (2023). $4.4 Million Settlement Case
                  Study.
                </p>
                <p>• AdventHealth. Most Common High School Sports Injuries.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
