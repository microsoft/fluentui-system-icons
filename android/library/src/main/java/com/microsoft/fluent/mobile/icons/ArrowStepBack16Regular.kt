package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowStepBack16: ImageVector
  get() {
    if (_arrowStepBack16 != null) {
      return _arrowStepBack16!!
    }
    _arrowStepBack16 = fluentIcon(name = "Regular.ArrowStepBack16", 16f) {
      materialPath {
          moveTo(5.854F, 2.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(3.707F, 5.0F)
          horizontalLineToRelative(2.336F)
          curveToRelative(1.468F, 0.0F, 2.905F, 0.0F, 4.226F, 0.396F)
          curveToRelative(1.365F, 0.41F, 2.585F, 1.234F, 3.647F, 2.827F)
          curveToRelative(0.153F, 0.23F, 0.091F, 0.54F, -0.139F, 0.693F)
          curveToRelative(-0.23F, 0.153F, -0.54F, 0.091F, -0.693F, -0.139F)
          curveToRelative(-0.938F, -1.407F, -1.968F, -2.083F, -3.103F, -2.423F)
          curveTo(8.815F, 6.004F, 7.517F, 6.0F, 6.0F, 6.0F)
          horizontalLineTo(3.707F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineToRelative(-3.0F, -3.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(3.0F, -3.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()
          moveTo(8.0F, 14.0F)
          curveToRelative(1.104F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.896F, -2.0F, -2.0F, -2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _arrowStepBack16!!
  }

private var _arrowStepBack16: ImageVector? = null
