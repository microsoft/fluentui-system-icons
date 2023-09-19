package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon
import androidx.compose.ui.graphics.vector.PathBuilder

public val FluentIcons.Regular.MyLocation12: ImageVector
    get() {
        if (_myLocation12 != null) {
            return _myLocation12!!
        }
        _myLocation12 = fluentIcon(name = "Regular.MyLocation12", 12f) {
            addGroup(clipPathData = PathBuilder().apply {
                moveTo(0.0F, 0.0F)
                horizontalLineToRelative(12.0F)
                verticalLineToRelative(12.0F)
                horizontalLineTo(0.0F)
                close()
                moveToRelative(0.0F, 0.0F)
            }.getNodes())
            materialPath {
                moveTo(6.0F, 8.0F)
                curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
                reflectiveCurveTo(7.105F, 4.0F, 6.0F, 4.0F)
                reflectiveCurveTo(4.0F, 4.895F, 4.0F, 6.0F)
                reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
                close()
                moveTo(5.5F, 2.03F)
                verticalLineTo(0.5F)
                curveTo(5.5F, 0.224F, 5.724F, 0.0F, 6.0F, 0.0F)
                reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
                verticalLineToRelative(1.53F)
                curveTo(8.31F, 2.257F, 9.743F, 3.69F, 9.969F, 5.5F)
                horizontalLineTo(11.5F)
                curveTo(11.776F, 5.5F, 12.0F, 5.724F, 12.0F, 6.0F)
                reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
                horizontalLineTo(9.969F)
                curveToRelative(-0.226F, 1.81F, -1.66F, 3.244F, -3.47F, 3.47F)
                lineTo(6.5F, 10.0F)
                verticalLineToRelative(1.5F)
                curveTo(6.5F, 11.776F, 6.276F, 12.0F, 6.0F, 12.0F)
                reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
                verticalLineTo(9.97F)
                curveTo(3.69F, 9.743F, 2.257F, 8.31F, 2.03F, 6.5F)
                horizontalLineTo(0.5F)
                curveTo(0.224F, 6.5F, 0.0F, 6.276F, 0.0F, 6.0F)
                reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
                horizontalLineToRelative(1.53F)
                curveTo(2.257F, 3.692F, 3.69F, 2.258F, 5.5F, 2.032F)
                close()
                moveTo(3.0F, 6.0F)
                curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
                reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
                reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
                reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
                close()
            }
        }
        return _myLocation12!!
    }

private var _myLocation12: ImageVector? = null
