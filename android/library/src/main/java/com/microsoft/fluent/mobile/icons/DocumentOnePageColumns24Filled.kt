package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentOnePageColumns24: ImageVector
  get() {
    if (_documentOnePageColumns24 != null) {
      return _documentOnePageColumns24!!
    }
    _documentOnePageColumns24 = fluentIcon(name = "Filled.DocumentOnePageColumns24", 24f) {
      materialPath {
          moveTo(4.0F, 4.25F)
          curveTo(4.0F, 3.007F, 5.007F, 2.0F, 6.25F, 2.0F)
          horizontalLineToRelative(11.5F)
          curveTo(18.993F, 2.0F, 20.0F, 3.007F, 20.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 22.0F, 4.0F, 20.993F, 4.0F, 19.75F)
          verticalLineTo(4.25F)
          close()
          moveTo(8.75F, 5.0F)
          curveTo(8.336F, 5.0F, 8.0F, 5.336F, 8.0F, 5.75F)
          verticalLineToRelative(12.5F)
          curveTo(8.0F, 18.664F, 8.336F, 19.0F, 8.75F, 19.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.75F)
          curveTo(9.5F, 5.336F, 9.164F, 5.0F, 8.75F, 5.0F)
          close()
          moveTo(16.0F, 5.75F)
          curveTo(16.0F, 5.336F, 15.664F, 5.0F, 15.25F, 5.0F)
          reflectiveCurveTo(14.5F, 5.336F, 14.5F, 5.75F)
          verticalLineToRelative(12.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(16.0F, 18.664F, 16.0F, 18.25F)
          verticalLineTo(5.75F)
          close()        
      }
    }
    return _documentOnePageColumns24!!
  }

private var _documentOnePageColumns24: ImageVector? = null
