package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextCaseTitle20: ImageVector
  get() {
    if (_textCaseTitle20 != null) {
      return _textCaseTitle20!!
    }
    _textCaseTitle20 = fluentIcon(name = "Filled.TextCaseTitle20", 20f) {
      materialPath {
          moveTo(12.5F, 3.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(4.657F)
          curveTo(13.743F, 8.243F, 14.347F, 8.0F, 15.0F, 8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.567F, 3.0F, 3.5F)
          reflectiveCurveTo(16.657F, 15.0F, 15.0F, 15.0F)
          curveToRelative(-0.653F, 0.0F, -1.257F, -0.243F, -1.75F, -0.657F)
          verticalLineTo(14.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          close()
          moveTo(15.0F, 13.5F)
          curveToRelative(0.62F, 0.0F, 1.5F, -0.67F, 1.5F, -2.0F)
          reflectiveCurveToRelative(-0.88F, -2.0F, -1.5F, -2.0F)
          reflectiveCurveToRelative(-1.5F, 0.67F, -1.5F, 2.0F)
          reflectiveCurveToRelative(0.88F, 2.0F, 1.5F, 2.0F)
          close()
          moveTo(6.495F, 3.25F)
          curveTo(6.81F, 3.255F, 7.089F, 3.456F, 7.193F, 3.754F)
          lineToRelative(3.652F, 10.5F)
          curveToRelative(0.136F, 0.39F, -0.07F, 0.818F, -0.462F, 0.954F)
          curveToRelative(-0.391F, 0.136F, -0.819F, -0.07F, -0.955F, -0.462F)
          lineTo(8.647F, 12.5F)
          horizontalLineTo(4.06F)
          lineTo(3.2F, 14.766F)
          curveToRelative(-0.147F, 0.387F, -0.58F, 0.582F, -0.967F, 0.435F)
          curveToRelative(-0.387F, -0.147F, -0.582F, -0.58F, -0.435F, -0.967F)
          lineToRelative(3.984F, -10.5F)
          curveTo(5.895F, 3.439F, 6.18F, 3.246F, 6.495F, 3.25F)
          close()
          moveTo(4.63F, 11.0F)
          horizontalLineToRelative(3.495F)
          lineTo(6.454F, 6.195F)
          lineTo(4.63F, 11.0F)
          close()        
      }
    }
    return _textCaseTitle20!!
  }

private var _textCaseTitle20: ImageVector? = null
