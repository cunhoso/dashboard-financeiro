from rest_framework import serializers
from .models import Funcionario, Cliente, Gasto, Lucro

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class GastoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gasto
        fields = '__all__'

class LucroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lucro
        fields = '__all__'