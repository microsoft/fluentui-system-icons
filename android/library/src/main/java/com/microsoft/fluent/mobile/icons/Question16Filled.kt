package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Question16: ImageVector
  get() {
    if (_question16 != null) {
      return _question16!!
    }
    _question16 = fluentIcon(name = "Filled.Question16", 16f) {
      materialPath {
          moveTo(8.0F, 2.0F)
          curveTo(6.346F, 2.0F, 5.0F, 3.346F, 5.0F, 5.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(6.5F, 5.414F, 6.5F, 5.0F)
          curveToRelative(0.0F, -0.826F, 0.674F, -1.5F, 1.5F, -1.5F)
          reflectiveCurveTo(9.5F, 4.174F, 9.5F, 5.0F)
          curveToRelative(0.0F, 0.653F, -0.121F, 1.018F, -0.254F, 1.25F)
          curveTo(9.11F, 6.492F, 8.925F, 6.66F, 8.645F, 6.893F)
          lineTo(8.594F, 6.935F)
          curveToRelative(-0.26F, 0.215F, -0.612F, 0.507F, -0.88F, 0.939F)
          curveToRelative(-0.3F, 0.483F, -0.464F, 1.08F, -0.464F, 1.876F)
          verticalLineToRelative(0.5F)
          curveTo(7.25F, 10.664F, 7.586F, 11.0F, 8.0F, 11.0F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineToRelative(-0.5F)
          curveToRelative(0.0F, -0.579F, 0.116F, -0.888F, 0.239F, -1.085F)
          curveToRelative(0.135F, -0.219F, 0.316F, -0.37F, 0.616F, -0.62F)
          curveToRelative(0.283F, -0.236F, 0.66F, -0.553F, 0.945F, -1.053F)
          curveTo(10.84F, 6.482F, 11.0F, 5.847F, 11.0F, 5.0F)
          curveToRelative(0.0F, -1.654F, -1.346F, -3.0F, -3.0F, -3.0F)
          close()
          moveToRelative(0.0F, 12.25F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _question16!!
  }

private var _question16: ImageVector? = null
