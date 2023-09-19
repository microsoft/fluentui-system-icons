package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAddSpaceBefore20: ImageVector
  get() {
    if (_textAddSpaceBefore20 != null) {
      return _textAddSpaceBefore20!!
    }
    _textAddSpaceBefore20 = fluentIcon(name = "Regular.TextAddSpaceBefore20", 20f) {
      materialPath {
          moveTo(8.146F, 5.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineTo(10.0F, 6.293F)
          lineToRelative(1.146F, -1.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          close()
          moveTo(3.0F, 10.5F)
          curveTo(3.0F, 10.224F, 3.224F, 10.0F, 3.5F, 10.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 11.0F, 16.5F, 11.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 11.0F, 3.0F, 10.776F, 3.0F, 10.5F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveTo(3.0F, 14.224F, 3.224F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(16.776F, 15.0F, 16.5F, 15.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 15.0F, 3.0F, 14.776F, 3.0F, 14.5F)
          close()        
      }
    }
    return _textAddSpaceBefore20!!
  }

private var _textAddSpaceBefore20: ImageVector? = null
