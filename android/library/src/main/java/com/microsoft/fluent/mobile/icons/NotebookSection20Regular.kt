package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.NotebookSection20: ImageVector
  get() {
    if (_notebookSection20 != null) {
      return _notebookSection20!!
    }
    _notebookSection20 = fluentIcon(name = "Regular.NotebookSection20", 20f) {
      materialPath {
          moveTo(14.0F, 2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineTo(3.0F)
          horizontalLineTo(8.0F)
          curveTo(6.895F, 3.0F, 6.0F, 3.895F, 6.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-15.0F)
          close()
          moveTo(13.0F, 16.0F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(12.0F)
          close()        
      }
    }
    return _notebookSection20!!
  }

private var _notebookSection20: ImageVector? = null
