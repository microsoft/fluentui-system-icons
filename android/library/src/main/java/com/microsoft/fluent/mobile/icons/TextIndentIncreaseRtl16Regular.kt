package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextIndentIncreaseRtl16: ImageVector
  get() {
    if (_textIndentIncreaseRtl16 != null) {
      return _textIndentIncreaseRtl16!!
    }
    _textIndentIncreaseRtl16 = fluentIcon(name = "Regular.TextIndentIncreaseRtl16", 16f) {
      materialPath {
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 3.224F, 4.224F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveTo(10.776F, 3.0F, 11.0F, 3.224F, 11.0F, 3.5F)
          reflectiveCurveTo(10.776F, 4.0F, 10.5F, 4.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(4.224F, 4.0F, 4.0F, 3.776F, 4.0F, 3.5F)
          close()
          moveToRelative(10.854F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(13.707F, 7.5F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.196F, -0.512F, 0.196F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()
          moveTo(1.0F, 7.5F)
          curveTo(1.0F, 7.224F, 1.224F, 7.0F, 1.5F, 7.0F)
          horizontalLineToRelative(9.0F)
          curveTo(10.776F, 7.0F, 11.0F, 7.224F, 11.0F, 7.5F)
          reflectiveCurveTo(10.776F, 8.0F, 10.5F, 8.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(1.224F, 8.0F, 1.0F, 7.776F, 1.0F, 7.5F)
          close()
          moveToRelative(5.0F, 4.0F)
          curveTo(6.0F, 11.224F, 6.224F, 11.0F, 6.5F, 11.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(10.776F, 12.0F, 10.5F, 12.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(6.224F, 12.0F, 6.0F, 11.776F, 6.0F, 11.5F)
          close()        
      }
    }
    return _textIndentIncreaseRtl16!!
  }

private var _textIndentIncreaseRtl16: ImageVector? = null
