package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAddSpaceAfter20: ImageVector
  get() {
    if (_textAddSpaceAfter20 != null) {
      return _textAddSpaceAfter20!!
    }
    _textAddSpaceAfter20 = fluentIcon(name = "Regular.TextAddSpaceAfter20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 5.224F, 3.224F, 5.0F, 3.5F, 5.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 5.0F, 17.0F, 5.224F, 17.0F, 5.5F)
          reflectiveCurveTo(16.776F, 6.0F, 16.5F, 6.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 6.0F, 3.0F, 5.776F, 3.0F, 5.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(3.0F, 9.224F, 3.224F, 9.0F, 3.5F, 9.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 9.0F, 17.0F, 9.224F, 17.0F, 9.5F)
          reflectiveCurveTo(16.776F, 10.0F, 16.5F, 10.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 10.0F, 3.0F, 9.776F, 3.0F, 9.5F)
          close()
          moveToRelative(5.146F, 5.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineTo(10.0F, 14.207F)
          lineToRelative(1.146F, 1.147F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, 1.5F)
          close()        
      }
    }
    return _textAddSpaceAfter20!!
  }

private var _textAddSpaceAfter20: ImageVector? = null
