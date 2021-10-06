from behave import *
from Initial import Initial
use_step_matcher('re')

@given(u'we have a list of values')
def step_impl(context):
    context.array = [4, 2, 8, 6]

@when(u'we pop the last value')
def step_impl(context):
    context.array = Initial(context.array)

@then(u'we will get the new list')
def step_impl(context):
    assert(context.array)
