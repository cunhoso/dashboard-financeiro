from rest_framework import viewsets
from .models import Funcionario, Cliente, Gasto, Lucro
from .serializers import FuncionarioSerializer, ClienteSerializer, GastoSerializer, LucroSerializer

class FuncionarioViewSet(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class GastoViewSet(viewsets.ModelViewSet):
    queryset = Gasto.objects.all()
    serializer_class = GastoSerializer

class LucroViewSet(viewsets.ModelViewSet):
    queryset = Lucro.objects.all()
    serializer_class = LucroSerializer