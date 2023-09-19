package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextIndentDecreaseLtr16: ImageVector
  get() {
    if (_textIndentDecreaseLtr16 != null) {
      return _textIndentDecreaseLtr16!!
    }
    _textIndentDecreaseLtr16 = fluentIcon(name = "Regular.TextIndentDecreaseLtr16", 16f) {
      materialPath {
          moveTo(11.5F, 3.0F)
          curveTo(11.776F, 3.0F, 12.0F, 3.224F, 12.0F, 3.5F)
          reflectiveCurveTo(11.776F, 4.0F, 11.5F, 4.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(5.224F, 4.0F, 5.0F, 3.776F, 5.0F, 3.5F)
          reflectiveCurveTo(5.224F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(3.0F, 4.0F)
          curveTo(14.776F, 7.0F, 15.0F, 7.224F, 15.0F, 7.5F)
          reflectiveCurveTo(14.776F, 8.0F, 14.5F, 8.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.224F, 8.0F, 5.0F, 7.776F, 5.0F, 7.5F)
          reflectiveCurveTo(5.224F, 7.0F, 5.5F, 7.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveToRelative(-5.0F, 4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(9.776F, 12.0F, 9.5F, 12.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(5.224F, 12.0F, 5.0F, 11.776F, 5.0F, 11.5F)
          reflectiveCurveTo(5.224F, 11.0F, 5.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(2.646F, 5.646F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(2.207F, 7.5F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(1.5F, -1.5F)
          close()        
      }
    }
    return _textIndentDecreaseLtr16!!
  }

private var _textIndentDecreaseLtr16: ImageVector? = null
