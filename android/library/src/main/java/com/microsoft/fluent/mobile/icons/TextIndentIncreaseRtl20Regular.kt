package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextIndentIncreaseRtl20: ImageVector
  get() {
    if (_textIndentIncreaseRtl20 != null) {
      return _textIndentIncreaseRtl20!!
    }
    _textIndentIncreaseRtl20 = fluentIcon(name = "Regular.TextIndentIncreaseRtl20", 20f) {
      materialPath {
          moveTo(5.0F, 4.5F)
          curveTo(5.0F, 4.224F, 5.224F, 4.0F, 5.5F, 4.0F)
          horizontalLineToRelative(8.0F)
          curveTo(13.776F, 4.0F, 14.0F, 4.224F, 14.0F, 4.5F)
          reflectiveCurveTo(13.776F, 5.0F, 13.5F, 5.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(5.224F, 5.0F, 5.0F, 4.776F, 5.0F, 4.5F)
          close()
          moveToRelative(-3.0F, 5.0F)
          curveTo(2.0F, 9.224F, 2.224F, 9.0F, 2.5F, 9.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 9.0F, 14.0F, 9.224F, 14.0F, 9.5F)
          reflectiveCurveTo(13.776F, 10.0F, 13.5F, 10.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          close()
          moveTo(7.5F, 14.0F)
          curveTo(7.224F, 14.0F, 7.0F, 14.224F, 7.0F, 14.5F)
          reflectiveCurveTo(7.224F, 15.0F, 7.5F, 15.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 14.0F, 13.5F, 14.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveToRelative(10.367F, -6.264F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(15.746F, 9.15F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(1.414F, 1.414F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-1.06F, -1.06F)
          lineToRelative(1.06F, -1.062F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          close()        
      }
    }
    return _textIndentIncreaseRtl20!!
  }

private var _textIndentIncreaseRtl20: ImageVector? = null
