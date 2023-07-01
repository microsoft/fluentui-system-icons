package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextCaseTitle16: ImageVector
  get() {
    if (_textCaseTitle16 != null) {
      return _textCaseTitle16!!
    }
    _textCaseTitle16 = fluentIcon(name = "Regular.TextCaseTitle16", 16f) {
      materialPath {
          moveTo(5.0F, 2.5F)
          curveToRelative(0.21F, 0.0F, 0.397F, 0.13F, 0.47F, 0.327F)
          lineToRelative(3.5F, 9.5F)
          curveToRelative(0.095F, 0.26F, -0.038F, 0.547F, -0.297F, 0.642F)
          curveToRelative(-0.26F, 0.096F, -0.547F, -0.037F, -0.642F, -0.296F)
          lineTo(7.046F, 10.0F)
          horizontalLineTo(2.954F)
          lineToRelative(-0.985F, 2.673F)
          curveToRelative(-0.095F, 0.259F, -0.383F, 0.392F, -0.642F, 0.296F)
          curveToRelative(-0.259F, -0.095F, -0.391F, -0.383F, -0.296F, -0.642F)
          lineToRelative(3.5F, -9.5F)
          curveTo(4.603F, 2.631F, 4.791F, 2.5F, 5.001F, 2.5F)
          close()
          moveToRelative(0.0F, 1.946F)
          lineTo(3.322F, 9.0F)
          horizontalLineToRelative(3.356F)
          lineTo(5.0F, 4.446F)
          close()
          moveTo(10.5F, 2.5F)
          curveTo(10.776F, 2.5F, 11.0F, 2.724F, 11.0F, 3.0F)
          verticalLineToRelative(4.6F)
          curveTo(11.418F, 7.223F, 11.937F, 7.0F, 12.5F, 7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, 1.343F, 2.5F, 3.0F)
          reflectiveCurveToRelative(-1.12F, 3.0F, -2.5F, 3.0F)
          curveToRelative(-0.563F, 0.0F, -1.082F, -0.223F, -1.5F, -0.6F)
          verticalLineToRelative(0.1F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(10.0F, 12.776F, 10.0F, 12.5F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          close()
          moveToRelative(2.0F, 9.5F)
          curveToRelative(0.665F, 0.0F, 1.5F, -0.717F, 1.5F, -2.0F)
          reflectiveCurveToRelative(-0.835F, -2.0F, -1.5F, -2.0F)
          reflectiveCurveTo(11.0F, 8.717F, 11.0F, 10.0F)
          reflectiveCurveToRelative(0.835F, 2.0F, 1.5F, 2.0F)
          close()        
      }
    }
    return _textCaseTitle16!!
  }

private var _textCaseTitle16: ImageVector? = null
