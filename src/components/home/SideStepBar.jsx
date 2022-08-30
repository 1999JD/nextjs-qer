import { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { Link } from "next/link";


function Step1() {
  return (
    <div>
      <h3>第一步</h3>
      <p>搜尋餐廳並選擇號碼牌種類</p>
    </div>
  )
}
function Step2() {
  return (
    <div>
      <h3>第二步</h3>
      <p>填寫訂位資訊</p>
    </div>
  )
}
function Step3() {
  return (
    <div>
      <h3>第三步</h3>
      <p>線上查看叫號進度，讓您更彈性運用所有時間</p>
    </div>
  )
}

function FinishedStep() {

  return (<div>
    <Typography align='center'>
      現在你已經知道如何使用 Qer 了
    </Typography>
    <Button
      variant="contained"
      color="primary"
    >
      <Link to="/customer/" >立即前往使用</Link>
    </Button>
  </div>)

}


function getSteps() {
  return ['', '', ''];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 />;
    default:
      return <FinishedStep />;
  }
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length) {
      setActiveStep(0)
      return
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <Paper >
      <div >
        {getStepContent(activeStep)}
      </div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div >
        <Button color="primary" disabled={activeStep === 0} onClick={handleBack} >
          上一步
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          {activeStep !== steps.length - 1 && activeStep < steps.length && '下一步'}
          {activeStep === steps.length - 1 && '下一步'}
          {activeStep === steps.length && '返回第一步'}
        </Button>
      </div>
    </Paper>
  );
}
