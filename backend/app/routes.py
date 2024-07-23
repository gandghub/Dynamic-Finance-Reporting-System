from flask import Blueprint, jsonify, request
from .models import User, Report, FinancialStatement, KPI, db

main = Blueprint('main', __name__)

@main.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.username for user in users])

@main.route('/api/reports', methods=['GET'])
def get_reports():
    reports = Report.query.all()
    return jsonify([{'id': report.id, 'name': report.name} for report in reports])

@main.route('/api/reports', methods=['POST'])
def create_report():
    data = request.get_json()
    new_report = Report(name=data['name'], data=data['data'], user_id=data['user_id'])
    db.session.add(new_report)
    db.session.commit()
    return jsonify({'message': 'Report created successfully!'}), 201

@main.route('/api/financial-statements', methods=['GET'])
def get_financial_statements():
    statements = FinancialStatement.query.all()
    return jsonify([{'id': statement.id, 'type': statement.type, 'data': statement.data} for statement in statements])

@main.route('/api/financial-statements', methods=['POST'])
def create_financial_statement():
    data = request.get_json()
    new_statement = FinancialStatement(type=data['type'], data=data['data'], user_id=data['user_id'])
    db.session.add(new_statement)
    db.session.commit()
    return jsonify({'message': 'Financial Statement created successfully!'}), 201

@main.route('/api/kpis', methods=['GET'])
def get_kpis():
    kpis = KPI.query.all()
    return jsonify([{'id': kpi.id, 'name': kpi.name, 'value': kpi.value} for kpi in kpis])

@main.route('/api/kpis', methods=['POST'])
def create_kpi():
    data = request.get_json()
    new_kpi = KPI(name=data['name'], value=data['value'], user_id=data['user_id'])
    db.session.add(new_kpi)
    db.session.commit()
    return jsonify({'message': 'KPI created successfully!'}), 201
