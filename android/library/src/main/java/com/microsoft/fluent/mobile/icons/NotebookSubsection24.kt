package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.NotebookSubsection24: ImageVector
  get() {
    if (_notebookSubsection24 != null) {
      return _notebookSubsection24!!
    }
    _notebookSubsection24 = fluentIcon(name = "Filled.NotebookSubsection24", 24f) {
      materialPath {
          moveTo(9.0F, 2.0F)
          curveTo(6.515F, 2.0F, 4.5F, 4.015F, 4.5F, 6.5F)
          verticalLineToRelative(9.4F)
          curveToRelative(0.0F, 0.98F, 0.626F, 1.813F, 1.5F, 2.122F)
          verticalLineTo(6.5F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(5.002F)
          curveTo(13.693F, 2.626F, 12.86F, 2.0F, 11.88F, 2.0F)
          horizontalLineTo(9.0F)
          close()
          moveTo(7.0F, 6.75F)
          curveTo(7.0F, 5.507F, 8.007F, 4.5F, 9.25F, 4.5F)
          horizontalLineTo(15.0F)
          verticalLineTo(2.75F)
          curveTo(15.0F, 2.336F, 15.336F, 2.0F, 15.75F, 2.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(18.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(15.0F, 21.664F, 15.0F, 21.25F)
          verticalLineTo(20.0F)
          horizontalLineTo(9.25F)
          curveTo(8.007F, 20.0F, 7.0F, 18.993F, 7.0F, 17.75F)
          verticalLineToRelative(-11.0F)
          close()        
      }
    }
    return _notebookSubsection24!!
  }

private var _notebookSubsection24: ImageVector? = null
