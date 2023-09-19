package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextIndentIncreaseLtr20: ImageVector
  get() {
    if (_textIndentIncreaseLtr20 != null) {
      return _textIndentIncreaseLtr20!!
    }
    _textIndentIncreaseLtr20 = fluentIcon(name = "Regular.TextIndentIncreaseLtr20", 20f) {
      materialPath {
          moveTo(6.0F, 4.5F)
          curveTo(6.0F, 4.224F, 6.224F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(8.0F)
          curveTo(14.776F, 4.0F, 15.0F, 4.224F, 15.0F, 4.5F)
          reflectiveCurveTo(14.776F, 5.0F, 14.5F, 5.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(6.224F, 5.0F, 6.0F, 4.776F, 6.0F, 4.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(6.0F, 9.224F, 6.224F, 9.0F, 6.5F, 9.0F)
          horizontalLineToRelative(11.0F)
          curveTo(17.776F, 9.0F, 18.0F, 9.224F, 18.0F, 9.5F)
          reflectiveCurveTo(17.776F, 10.0F, 17.5F, 10.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(6.224F, 10.0F, 6.0F, 9.776F, 6.0F, 9.5F)
          close()
          moveTo(6.5F, 14.0F)
          curveTo(6.224F, 14.0F, 6.0F, 14.224F, 6.0F, 14.5F)
          reflectiveCurveTo(6.224F, 15.0F, 6.5F, 15.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(12.776F, 14.0F, 12.5F, 14.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(2.853F, 7.732F)
          curveToRelative(-0.195F, -0.195F, -0.511F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(3.208F, 9.5F)
          lineToRelative(-1.06F, 1.06F)
          curveToRelative(-0.196F, 0.196F, -0.196F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.195F, 0.195F, 0.511F, 0.195F, 0.707F, 0.0F)
          lineToRelative(1.414F, -1.414F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(2.854F, 7.731F)
          close()        
      }
    }
    return _textIndentIncreaseLtr20!!
  }

private var _textIndentIncreaseLtr20: ImageVector? = null
