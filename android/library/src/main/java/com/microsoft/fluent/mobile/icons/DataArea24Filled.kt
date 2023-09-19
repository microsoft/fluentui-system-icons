package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataArea24: ImageVector
  get() {
    if (_dataArea24 != null) {
      return _dataArea24!!
    }
    _dataArea24 = fluentIcon(name = "Filled.DataArea24", 24f) {
      materialPath {
          moveTo(3.0F, 3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(4.5F, 3.336F, 4.5F, 3.75F)
          verticalLineTo(19.5F)
          horizontalLineToRelative(15.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(20.664F, 21.0F, 20.25F, 21.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 21.0F, 3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineTo(3.75F)
          close()
          moveToRelative(16.5F, 3.0F)
          curveToRelative(0.0F, -0.284F, -0.16F, -0.544F, -0.415F, -0.67F)
          curveToRelative(-0.254F, -0.128F, -0.558F, -0.1F, -0.785F, 0.07F)
          lineToRelative(-5.6F, 4.2F)
          lineToRelative(-3.82F, -2.246F)
          curveToRelative(-0.219F, -0.13F, -0.488F, -0.138F, -0.715F, -0.025F)
          lineTo(5.5F, 9.411F)
          verticalLineTo(18.5F)
          horizontalLineToRelative(14.0F)
          verticalLineTo(6.75F)
          close()        
      }
    }
    return _dataArea24!!
  }

private var _dataArea24: ImageVector? = null
