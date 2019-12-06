from rest_framework import viewsets
from .models import Question
from .serializers import QuestionSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    # def create(self, request):
    #     new_question = request.POST.get('question_text')
    #     new_pub_date = request.POST.get('pub_date')
    #     print(new_question)
    #     q = Question.objects.create(question_text=new_question, pub_date=new_pub_date)

    #     return q