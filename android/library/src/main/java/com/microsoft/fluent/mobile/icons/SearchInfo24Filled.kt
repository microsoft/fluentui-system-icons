package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SearchInfo24: ImageVector
  get() {
    if (_searchInfo24 != null) {
      return _searchInfo24!!
    }
    _searchInfo24 = fluentIcon(name = "Filled.SearchInfo24", 24f) {
      materialPath {
          moveTo(17.25F, 10.0F)
          curveToRelative(0.0F, -4.004F, -3.246F, -7.25F, -7.25F, -7.25F)
          reflectiveCurveTo(2.75F, 5.996F, 2.75F, 10.0F)
          reflectiveCurveToRelative(3.246F, 7.25F, 7.25F, 7.25F)
          curveToRelative(1.732F, 0.0F, 3.322F, -0.607F, 4.569F, -1.62F)
          lineToRelative(4.9F, 4.9F)
          lineToRelative(0.085F, 0.073F)
          curveToRelative(0.293F, 0.218F, 0.71F, 0.194F, 0.976F, -0.073F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(-4.9F, -4.901F)
          curveToRelative(1.013F, -1.247F, 1.62F, -2.837F, 1.62F, -4.569F)
          close()
          moveTo(11.0F, 7.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveTo(9.0F, 7.552F, 9.0F, 7.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(-1.0F, 2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-3.5F)
          curveTo(9.25F, 9.336F, 9.586F, 9.0F, 10.0F, 9.0F)
          close()        
      }
    }
    return _searchInfo24!!
  }

private var _searchInfo24: ImageVector? = null
