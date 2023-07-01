package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowCollapseAll20: ImageVector
  get() {
    if (_arrowCollapseAll20 != null) {
      return _arrowCollapseAll20!!
    }
    _arrowCollapseAll20 = fluentIcon(name = "Regular.ArrowCollapseAll20", 20f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 4.224F, 2.224F, 4.0F, 2.5F, 4.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 4.0F, 18.0F, 4.224F, 18.0F, 4.5F)
          reflectiveCurveTo(17.776F, 5.0F, 17.5F, 5.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 5.0F, 2.0F, 4.776F, 2.0F, 4.5F)
          close()
          moveToRelative(3.146F, 2.646F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineTo(6.0F, 8.707F)
          verticalLineTo(15.5F)
          curveTo(6.0F, 15.776F, 5.776F, 16.0F, 5.5F, 16.0F)
          reflectiveCurveTo(5.0F, 15.776F, 5.0F, 15.5F)
          verticalLineTo(8.707F)
          lineToRelative(-1.647F, 1.647F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(2.5F, -2.5F)
          close()
          moveTo(17.5F, 8.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(10.224F, 8.0F, 10.0F, 7.776F, 10.0F, 7.5F)
          reflectiveCurveTo(10.224F, 7.0F, 10.5F, 7.0F)
          horizontalLineToRelative(7.0F)
          curveTo(17.776F, 7.0F, 18.0F, 7.224F, 18.0F, 7.5F)
          reflectiveCurveTo(17.776F, 8.0F, 17.5F, 8.0F)
          close()        
      }
    }
    return _arrowCollapseAll20!!
  }

private var _arrowCollapseAll20: ImageVector? = null
